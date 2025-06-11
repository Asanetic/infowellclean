<?php 
ob_start();

  $active_db="datacenter";
  if(isset($_GET["db"])){
    $active_db=$_GET["db"];
  }
 	$connection_array=array(
    
    	"next"=>[
        
          "hive_host"=>"localhost",
          "hive_username"=>"root",
          "hive_password"=>"",
          "hive_db"=>$active_db
        
        ]
      );
      
  $active_app_array=$connection_array["next"];

  $hive_host=$active_app_array["hive_host"];
  $hive_username=$active_app_array["hive_username"];
  $hive_password=$active_app_array["hive_password"];
  $hive_db=$active_app_array["hive_db"];
        
  $mysqliconn=mysqli_connect($hive_host,$hive_username,$hive_password) or die("cannot connect"); 

  mysqli_select_db($mysqliconn, $hive_db);

  $single_db=$hive_db;
  $single_conn=$mysqliconn;
  $db=$single_db;


$desired_column_order = [
    'tabesample' => ['colnme1']
];

$custom_tbl_cols=[
'tabesample'=>['columns'],  
];

if(isset($_GET['desired_col_order']))
{
  $desired_column_order=json_decode(base64_decode($_GET['desired_col_order']),true);
}

if(isset($_GET['custom_tbl_cols']))
{
  $custom_tbl_cols=json_decode(base64_decode($_GET['custom_tbl_cols']),true);
}
// Retrieve table and column information


$tables = array();

if (isset($_GET['table'])) {
    $single_table = $_GET['table'];

    $query = "SHOW TABLES FROM `$db`  where Tables_in_$db ='$single_table'";
} else {
    $query = "SHOW TABLES FROM `$db` ";
}

$result = mysqli_query($single_conn, $query) or die(mysqli_error($single_conn));

while ($row = mysqli_fetch_row($result)) {
    $tableName = $row[0];
    $columns = array();

    // Retrieve column information for each table
    $query = "SHOW FULL COLUMNS FROM $db.$tableName";
    $result2 = mysqli_query($single_conn, $query);

    while ($columnRow = mysqli_fetch_assoc($result2)) {
        $columnInfo = array(
            'name' => $columnRow['Field'],
            'type' => $columnRow['Type'],
            'nullable' => $columnRow['Null'],
            'default' => $columnRow['Default'],
            'extra' => $columnRow['Extra']
        );

        $columns[] = $columnInfo;
    }
       
    if(isset($custom_tbl_cols[$tableName]))
       {
        $customColumns = $custom_tbl_cols[$tableName];   
         
        foreach ($customColumns as $customColumn) 
        {
                   
           $customColumnInfo = array(
            'name' => $customColumn,
            'type' => 'hive_custom_cell',
            'nullable' =>"",
            'default' =>"",
            'extra' =>""
           );
          
          $columns[] = $customColumnInfo;
                    
        }
      }
  
    // Apply column rearrangement logic here
    if (isset($desired_column_order[$tableName])) {
        $desired_order = $desired_column_order[$tableName];

        // Rearrange columns based on the desired order
        $rearrangedColumns = array();
        foreach ($desired_order as $desiredColumn) {
            foreach ($columns as $columnInfo) {
                if ($columnInfo['name'] === $desiredColumn) {
                    $rearrangedColumns[] = $columnInfo;
                    break;
                }
            }
        }

        // Include the remaining columns that are not in the desired order
        foreach ($columns as $columnInfo) {
            if (!in_array($columnInfo['name'], $desired_order)) {
                $rearrangedColumns[] = $columnInfo;
            }
        }

        $columns = $rearrangedColumns;
    }
  
  
    $tables[$tableName] = $columns;
}

// Convert the table and column information to JSON
$jsonData = json_encode($tables, JSON_PRETTY_PRINT);

// Output the JSON data
header('Content-Type: application/json');
echo $jsonData;

// Close the database connection
mysqli_close($single_conn);

?>