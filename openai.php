$curlopt_url="https://api.openai.com/v1/chat/completions";
$curlopt_post_fields = json_encode([
    "model" => "gpt-4",
    "messages" => [
        ["role" => "user", "content" => "so what do you recommed"]
    ]
]);


$apikey= "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";

$headers = [
    "Authorization: Bearer $apikey",
    "Content-Type: application/json"
];


$chat_resp = magic_post_curl_min($curlopt_url,$curlopt_post_fields, "POST", ($headers));

$chat_dec_= json_decode($chat_resp, true);

// Get the assistant's reply message
$assistantMessage = $chat_dec_['choices'][0]['message']['content'];

echo $assistantMessage;




