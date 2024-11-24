@php
    $blockName = 'b-first-screen';
@endphp

<div class="{{ $blockName }}">
    <video class="{{ $blockName }}__video" autoplay muted loop>
        <source src="/video/first-bg.mp4"/>
    </video>
    <div class="{{ $blockName }}__text-container">
        <div class="{{ $blockName }}__subtitle c-font-overpass">
            {!! $subtitle !!}
        </div>
        <h1 class="{{ $blockName }}__title c-font-motorblock">
            {!! $title !!}
        </h1>
        <div class="{{ $blockName }}__date c-font-overpass">
            {!! $date !!}
        </div>
    </div>
</div>