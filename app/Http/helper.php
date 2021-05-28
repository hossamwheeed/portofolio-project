<?php

    if (!function_exists('lang')) {
        function lang()
        {
            if (session()->has('lang')) {
                return session('lang');
            } else {
                session()->put('lang', 'ar');
                return 'ar';
            }
        }
    }
     if (!function_exists('front_lang')) {
        function front_lang()
        {
            if (session()->has('lang2')) {
                return session('lang2');
            } else {
                session()->put('lang2', 'ar');
                return 'ar';
            }
        }
    }

    if (!function_exists('direction')) {
        function direction()
        {
            if (session()->has('lang')) {
                if (session('lang') == 'ar') {
                    return 'rtl';
                } else {
                    return 'ltr';
                }
            } else {
                return 'ltr';
            }
        }
    }
      if (!function_exists('direction2')) {
        function direction2()
        {
            if (session()->has('lang2')) {
                if (session('lang2') == 'ar') {
                    return 'rtl';
                } else {
                    return 'ltr';
                }
            } else {
                return 'ltr';
            }
        }
    }

    if (!function_exists('admin')) {
        function admin()
        {
            return auth()->guard('admin');
        }
    }

    if (!function_exists('aurl')) {
        function aurl($url = null)
        {
            return url('admin/' . $url);
        }
    }

    if (!function_exists('v_image')) {
        function v_image($ext = null) {
            if ($ext === null) {
                return 'image|mimes:jpg,jpeg,png,gif,bmp';
            } else {
                return 'image|mimes:'.$ext;
            }

        }
    }
