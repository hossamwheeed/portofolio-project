<!DOCTYPE html>
<html lang="en" dir="{{direction()}}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>FileRole</title>

	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	@if(direction()=="rtl")
		<link href="{{url('/')}}/backend/RTL/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="{{url('/')}}/backend/RTL/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
		<link href="{{url('/')}}/backend/RTL/css/layout.min.css" rel="stylesheet" type="text/css">
		<link href="{{url('/')}}/backend/RTL/css/components.min.css" rel="stylesheet" type="text/css">
		<link href="{{url('/')}}/backend/RTL/css/colors.min.css" rel="stylesheet" type="text/css">
    <script src="{{url('/')}}/backend/RTL/js/app.js"></script>
	@else
	<link href="{{url('/')}}/backend/LTR/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/LTR/css/colors.min.css" rel="stylesheet" type="text/css">
	<script src="{{url('/')}}/backend/LTR/js/app.js"></script>
  @endif
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<link href="{{url('/')}}/backend/global_assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
	<link href="{{url('/')}}/backend/global_assets/css/admin_login.css" rel="stylesheet" type="text/css">
	<script src="{{url('/')}}/backend/global_assets/js/main/jquery.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/main/bootstrap.bundle.min.js"></script>
	<script src="{{url('/')}}/backend/global_assets/js/plugins/loaders/blockui.min.js"></script>

	<!-- /core JS files -->

	<!-- Theme JS files -->

	<!-- /theme JS files -->


	<style>
	    .img-logo {
	            margin: 0 -20px 10px 0 !important;
	    }
	    .mb-0 {
	        color: #fff !important;
            font-weight: bold !important;
            font-size: 18px !important;
	    }
	    .d-block {
	            color: #fff !important;
	    }
	    .btn-primary {
	            background: #13d1b6 !important;
	    }
	    .card {
	        background: none !important;
            border: 2px solid #278081 !important;
	    }
	    .login-form {
            width: 30rem !important;
            margin: 0 0 0 -33% !important;
        }

        @media (max-width:767px) {
                .login-form
                {
                    width: 100% !important;
                    margin: -35% 0 0 0 !important;
                }
                .page-content
                {
                background-image: url(../../../../../../backend/global_assets/images/backgroundimage.jpg);
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                }
                .card
                {
                    background: rgb(0, 0, 0,0.2) !important;
                    border: 0 solid #278081 !important;
                }
                .card li {
                    display: inline-block;
                    width: 30.3333%;
                    text-align: center;
                    margin: 20px 0 0 0;
                }

        }

	</style>

</head>

<body>



	<!-- Page content -->
	<div class="page-content">

		<!-- Main content -->
		<div class="content-wrapper">
			@if(session()->has('error'))
				<div class="alert alert-danger alert-dismissible" style="text-align: center;width: 51%;margin: 0 auto;margin-top: 15px;">
					<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
					<span class="font-weight-semibold">{{session('error')}}</span>
				</div>
			@endif
			<!-- Content area -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- Login form -->
				<form class="login-form form-validate-jquery"  method="post">
					{!! csrf_field()!!}
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
								<div class="img-logo">
										<img src="https://lh3.googleusercontent.com/sapX6SYf4HXhfVgFSzdBxci-YKx0hUemkVT7Sd-Fo33AzY42BM4PYGe9jmltCbbNsyycwztcUSAXV0MK96Q=s40" alt="">

								</div>

								<h5 class="mb-0">{{trans('admin.login into your account')}}</h5>
								<span class="d-block text-muted">{{trans('admin.enter your credentials below')}}</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="email" class="form-control"  id="email" placeholder="{{trans('admin.email')}}"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required name="email">
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left"  >
								<input type="password" name="password" id="password" class="form-control" placeholder="{{trans('admin.password')}}" required name="password">
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-block"  id='validate'>{{trans('admin.sign in')}}<i class="icon-circle-right2 ml-2"></i></button>
							</div>

							<div class="text-center">
								<a href="{{aurl('forgot/password')}}">{{trans('admin.forgot_password')}}</a>
							</div>
							<div class="socialicon">

							</div>
						</div>
					</div>
				</form>
				<!-- /login form -->

			</div>
			<!-- /content area -->



		</div>
		<!-- /main content -->

	</div>
	<!-- /page content -->

</body>
</html>
