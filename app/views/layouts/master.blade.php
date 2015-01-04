@extends('layouts.base')

@section('title')
    <title>{{ $pageTitle . ' | nobox' }}</title>
@stop

@section('stylesheets')
    @if ('production' == $environment)
    <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}">
    @else
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    @endif
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
    @if ('production' == $environment)
    <script src="{{ asset('js/bundle.min.js') }}"></script>
    @else
    <script src="{{ asset('js/bundle.js') }}"></script>
    @endif
@stop
