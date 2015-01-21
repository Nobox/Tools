@extends('layouts.base')

@section('title')
    <title>{{ $pageTitle . ' | nobox' }}</title>
@stop

@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap-theme.min.css') }}">
@stop

@section('scripts-head')
    {{-- Modernizr --}}
    @if ('production' == $environment)
    <script src="{{ asset('js/vendor/modernizr.js') }}"></script>
    @else
    <script src="{{ asset('bower_components/modernizr/modernizr.js') }}"></script>
    @endif
@stop

@section('body')
    @if(file_exists(public_path() . '/svg/symbols.svg'))
        <?php include(public_path() . '/svg/symbols.svg'); ?>
    @endif

    @yield('content')
@stop

@section('scripts-body')
    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>

    @if ('production' == $environment)
    <script src="{{ asset('js/app.min.js') }}"></script>
    @else
    <script src="{{ asset('js/app.js') }}"></script>
    @endif
@stop
