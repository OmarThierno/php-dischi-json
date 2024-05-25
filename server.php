<?php
$list_disk = file_get_contents("dischi.json");


$list = json_decode($list_disk, true);
// if (!isset($list[0]["like"])) {
//   for ($i = 0; $i < count($list); $i++) {
//     $list[$i]['like'] = false;
//   }
// }

if (isset($_POST["like"])) {

  $index = $_POST["index"];
  $like = $_POST["like"];
  if ($like === 'like') {
    $list[$index]["like"] = !$list[$index]["like"];
    file_put_contents("dischi.json", json_encode($list));
  }
}

$response_date = [
  "results" => $list,
];

$json_list = json_encode($response_date);

header("Content-type: application/json");

echo $json_list;
