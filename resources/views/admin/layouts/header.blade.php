<!DOCTYPE html>
<html lang="en" dir="{{ direction() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="lang" content="{{ app()->getLocale() }}">
	<meta name="base_url" content="{{ URL::to('/') }}">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Filerole</title>
    <link rel="icon" href="{{ asset('favicon.png') }}">

	<!-- Global stylesheets -->
  <link href="{{url('/')}}/backend/global_assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/css/bootstrap-colorpicker.css">

@if(direction()=='ltr')

    <link href="{{url('/')}}/backend/LTR/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/colors.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/style-en.css" rel="stylesheet" type="text/css">
    <script src="{{url('/')}}/backend/LTR/js/app.js"></script>
@else
  <link href="{{url('/')}}/backend/RTL/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/RTL/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/RTL/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/RTL/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/RTL/css/colors.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/RTL/css/style-ar.css" rel="stylesheet" type="text/css">
    <script src="{{url('/')}}/backend/RTL/js/app.js"></script>

@endif

	<!-- /global stylesheets -->

	<!-- Core JS files -->


	<script src="{{url('/')}}/backend/global_assets/js/main/jquery.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/main/bootstrap.bundle.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/loaders/blockui.min.js"></script>
	<script src="{{url('/')}}/backend/RTL/js/custom.js"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="{{url('/')}}/backend/global_assets/js/plugins/visualization/d3/d3.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/visualization/d3/d3_tooltip.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/forms/styling/switchery.min.js"></script>
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/ui/moment/moment.min.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/daterangepicker.js"></script>-->
	<!-- Data tables  JS files -->
	<script src="{{url('/')}}/backend/global_assets/js/plugins/tables/datatables/datatables.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/forms/selects/select2.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/tables/datatables/extensions/jszip/jszip.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/tables/datatables/extensions/pdfmake/pdfmake.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/tables/datatables/extensions/pdfmake/vfs_fonts.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/tables/datatables/extensions/buttons.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/visualization/echarts/echarts.min.js"></script>
	 <script src="https://cdn.rawgit.com/twbs/bootstrap/v4.1.3/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/js/bootstrap-colorpicker.min.js"></script>



	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/anytime.min.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/pickadate/picker.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/pickadate/picker.date.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/pickadate/picker.time.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/pickers/pickadate/legacy.js"></script>-->
	<!--<script src="{{url('/')}}/backend/global_assets/js/plugins/notifications/jgrowl.min.js"></script>-->

	<script src="{{url('/')}}/backend/global_assets/js/demo_pages/datatables_extension_buttons_html5.js"></script>
	<!-- /Data tables  JS files -->
    <script src="https://www.gstatic.com/charts/loader.js"></script>
	<!--<script src="{{url('/')}}/backend/global_assets/js/demo_pages/dashboard.js"></script>-->

  <script>
    $(function () {
      // Basic instantiation:
      $('#demo').colorpicker();

      // Example using an event, to change the color of the .jumbotron background:
      $('#demo').on('colorpickerChange', function(event) {
        $('.jumbotron').css('background-color', event.color.toString());
      });
    });
  </script>

	<!-- /theme JS files -->
	@yield('js')
</head>

<body>
