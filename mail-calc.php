<?php
$to = 'americanqualitycabinets@gmail.com,info@american-construction-pro.com';
$subject = 'Calculator';
$subject = "=?utf-8?b?". base64_encode($subject) ."?=";


// данные с мыла
/*
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$size = trim($_POST["howmany"]);
$promo = trim($_POST["roistat-promo-code"]);
$address = trim($_POST["address"]);
$date = trim($_POST["date"]);
$contact = trim($_POST["contact"]);
$text = trim($_POST["detail"]);

$zip = trim($_POST["zipcode"]);
$cabinets = trim($_POST["cabinets-1"]);
$appliances = trim($_POST["appliances-1"]);
$countertops = trim($_POST["countertops-1"]);
$flooring = trim($_POST["flooring-1"]);
$lighting = trim($_POST["Lighting-1"]);
$financing = trim($_POST["financing-1"]);
*/

// Calculator
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$exclusive = trim($_POST["exclusive"]);
$island = trim($_POST["island"]);
$shape = trim($_POST["shape-info"]);
$demension = trim($_POST["demension"]);
$style = trim($_POST["style-info"]);
$color = trim($_POST["color"]);
$size_citch = trim($_POST["size-info"]);
$size_lf = trim($_POST["size_lf"]);
$low = trim($_POST["low"]);
$low_lf = trim($_POST["low_lf"]);
$med = trim($_POST["med"]);
$med_lf = trim($_POST["med_lf"]);
$high = trim($_POST["high"]);
$high_lf = trim($_POST["high_lf"]);
$custom = trim($_POST["custom"]);
$custom_lf = trim($_POST["custom_lf"]);

$start = array('utm_source', 'utm_campaign', 'utm_keyword', 'utm_geo', 'utm_matchtype', 'utm_site', 'utm_placement', 'utm_position', 'utm_ad');
$finish = array('Source', 'ID Campaign', 'Keyword', 'GEO', 'Matchtype', 'Google', 'Placement', 'AD Position', 'ID AD');
$repl = array('+','%20','%2B','%3A','%2F','%3D','%26','%23','%3F');
$replto = array(' ',' ','+',':','/','=','&','#','?');
preg_match_all('/([a-zA-Z_]+?)=([a-zA-Z0-9+:\/.%]+)/', $_SERVER['HTTP_REFERER'], $out);
for ($i=0;$i<count($out[0]);$i++)
{
    $advertising .= "<tr><td class=\"bold\">".str_replace($start, $finish, $out[1][$i]).':</td><td>'.str_replace($repl, $replto, $out[2][$i])."</td></tr>";
}


// текст письма
$message .= '
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">  
  <title>LEAD FROM CALCULATOR AMERICAN CONSTRUCTION PRO</title>
  <style>
   
    body {
        font-family: "Trebuchet MS", Helvetica, sans-serif;
    }
    table {
	width: 100%;
    }
    h1 {
    font-size:medium;
    }
    caption {
     text-align:left;
     margin:1% 0;
     padding:5px;
     background-color: #E6E6E6;
     font-weight:600;
	 }
	 td {
	 width:50%
	 }	 
	 .subinfo {
	 background-color: #E6E6E6;
	 font-size:x-small;
	 line-height:1;
	 padding:5px;
	 }
	 .bold {
	 font-weight:bold;
	 }
  </style>
</head>
<body>
<h1>LEAD FROM CALCULATOR AMERICAN CONSTRUTION PRO</h1>

<table>
<caption>Calculator Information:</caption>
	<tr>
		<td class="bold">Name:</td>
		<td>'.$name . '</td>
	</tr>
	<tr>
		<td class="bold">Email:</td>
        <td>'.$email.'</td>
	</tr>	
	<tr>
		<td class="bold">Cell Phone:</td>
		<td>'.$phone.'</td>
	</tr>
	<tr>
		<td class="bold">Message:</td>
		<td>'.$text.'</td>
	</tr>
    <tr>
		<td class="bold">Island:</td>
		<td>'.$island.'</td>
	</tr>
    <tr>
		<td class="bold">Shape:</td>
		<td>'.$shape.'</td>
	</tr>
	<tr>
		<td class="bold">Demension:</td>
		<td>'.$demension.'</td>
	</tr>
	<tr>
		<td class="bold">Style:</td>
		<td>'.$style.'</td>
	</tr>
	<tr>
		<td class="bold">Color:</td>
		<td>'.$color.'</td>
	</tr>
	<tr>
		<td class="bold">Kitchen Size(Inches):</td>
		<td>'.$size_citch.'</td>
	</tr>
	<tr>
		<td class="bold">Kitchen Size(LF):</td>
		<td>'.$size_lf.'</td>
	</tr>
	<tr>
		<td class="bold">Price Low:</td>
		<td>'.$low.' & '.$low_lf.'</td>
	</tr>
	<tr>
		<td class="bold">Price Med:</td>
		<td>'.$med.' & '.$med_lf.'</td>
	</tr>
	<tr>
		<td class="bold">Price High:</td>
		<td>'.$high.' & '.$high_lf.'</td>
	</tr>
	<tr>
		<td class="bold">Price Custom:</td>
		<td>'.$custom.' & '.$custom_lf.'</td>
	</tr>
</table>
';

if($advertising!="")
$message .= '
<table>
	<caption>Advertising Information:</caption>	
	'.$advertising.'
</table>';

$message .= '
<div class="subinfo">
  <p>Visitor IP adress: '.$_SERVER['REMOTE_ADDR'].'</p>  
  <p>Form submitted from: '. preg_replace('/\?.*/', '', $_SERVER['HTTP_REFERER']).'</p>
</div>
</body>
</html>
';




$headers = 'Content-type: text/html; charset="utf-8"';
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
$headers .= "From: CALCULATOR AMERICAN CONSTRUCTION PRO <info@american-construction-pro.com>\r\n";
mail($to, $subject, $message, $headers);

?>