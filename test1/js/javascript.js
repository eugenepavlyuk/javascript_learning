<script language="javascript" type="text/javascript">
    var isiPhone = (navigator.platform == 'iPhone')
	var isiPod = (navigator.platform == 'iPod')
	var isiPad = (navigator.platform == 'iPad')

	var isiOS = (isiPhone || isiPod || isiPad)

	if (isiOS) {
		window.location += "m"
    }
    
    function tapButton() {
		alert("Hello");
	}
</script>