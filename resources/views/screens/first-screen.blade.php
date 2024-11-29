@php
    $blockName = 'b-first-screen';
@endphp

<div class="{{ $blockName }}">
    <fieldset disabled>
        <video
            class="{{ $blockName }}__video"
            autoplay
            muted
            loop
            playsinline
        >
            <source src="/video/first-bg.mp4"/>
        </video>
    </fieldset>
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