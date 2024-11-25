@extends('layout')

@php
    $blockName = 'b-page';
@endphp

@section('content')
    {!! $header !!}
    <div class="{{ $blockName }}__screens-container">
        @foreach($screens as $key => $screen)
            <div
                class="{{ $blockName }}__screen {{ $blockName }}__screen--{{ $key }} {{ $loop->first ? 'enter' : '' }}"
                data-index="{{ $key }}"    
            >
                {!! $screen !!}
            </div>
        @endforeach
    </div>
    {!! $buyButton !!}
@endsection