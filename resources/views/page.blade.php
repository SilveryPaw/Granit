@extends('layout')

@php
    $blockName = 'b-page';
@endphp

@section('content')
    {!! $header !!}
    <div
        class="{{ $blockName }}__screens-container"
        style="--screens-count:{{ count($screens) }}"
    >
        @foreach($screens as $key => $screen)
            <div
                class="{{ $blockName }}__screen {{ $blockName }}__screen--{{ $key }} {{ $loop->first ? 'enter' : '' }}"
                data-index="{{ $key }}"    
            >
                {!! $screen !!}
            </div>
        @endforeach
    </div>
    <div class="{{ $blockName }}__temp-screens">
        @foreach($screens as $key => $screen)
            <div
                class="{{ $blockName }}__temp-screen"
                data-index="{{ $key }}"    
            >
            </div>
        @endforeach
    </div>
    <div class="{{ $blockName }}__buy-frame">
        {{-- <iframe
            frameborder="0"
            width="100%"
            height="50%"
            name="tc-frame-671b858e2b2cf13e2b5a4ff8"
            data-tc-event-id="671b858e2b2cf13e2b5a4ff8"
            data-tc-iframe-id="1732574593605"
            src="https://ticketscloud.com/v1/widgets/common?event=671b858e2b2cf13e2b5a4ff8&amp;token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjcxYjdlODVjNGI4YWRiMWZjYjc1MTliIn0.O1jLtwQsqu752kyMqo5gsC9r8gu8FXiSqXbL3mmaH9E&amp;partner=671b7e85c4b8adb1fcb7519b&amp;lang=ru&amp;utm=6744f2482b6c9ec8d84904d6&amp;iframe_id=1732574593605"
            scrolling="auto"
            class="tc-widget-frame_popup"
            allowpaymentrequest=""
            allow="payment *"
        ></iframe> --}}
    </div>

    {!! $buyButton !!}
@endsection