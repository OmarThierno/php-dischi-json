<?php
$list_disk = file_get_contents("dischi.json");


$list = json_decode($list_disk, true);

$response_date = [
  "results" => $list,
];

$json_list = json_encode($response_date);

header("Content-type: application/json");

echo $json_list;
