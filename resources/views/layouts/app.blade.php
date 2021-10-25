<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <header class="header">
        @yield('header')
    </header>

    <section>
        @yield('content')
    </section>


    <footer class="footer">
        @yield('footer')
    </footer>
</div>
<script src="{{ asset('js/app.js') }}"></script>
{{--<script src="{{ asset('js/bootstrap.bundle.js') }}"></script>--}}

</body>
</html>
