<?php
print_r($_POST);
print_r($_GET);
if($_GET && $_GET['search_submit']=='Search'){
    echo "2 products found"
}