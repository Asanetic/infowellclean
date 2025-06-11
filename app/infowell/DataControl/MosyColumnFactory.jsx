const MosyColumnFactory = {

   //-- infosnippets cols--//
  infosnippets: ["media", "title", "tag", "notes", "date_created"],

   //-- page_manifest_ cols--//
  page_manifest_: ["page_group", "site_id", "page_url", "hive_site_id", "hive_site_name", "project_id", "project_name"],

   //-- system_role_bundles cols--//
  system_role_bundles: ["bundle_id", "bundle_name", "remark", "hive_site_id", "hive_site_name"],

   //-- system_users cols--//
  system_users: ["name", "email", "tel", "login_password", "ref_id", "regdate", "user_no", "user_pic", "user_gender", "last_seen", "about", "hive_site_id", "hive_site_name", "auth_token", "token_status", "token_expiring_in", "project_id", "project_name"],

   //-- user_bundle_role_functions cols--//
  user_bundle_role_functions: ["bundle_id", "bundle_name", "role_id", "role_name", "remark", "hive_site_id", "hive_site_name"],

   //-- user_manifest_ cols--//
  user_manifest_: ["user_id", "user_name", "role_id", "site_id", "role_name", "hive_site_id", "hive_site_name", "project_id", "project_name"],


};
export default MosyColumnFactory;