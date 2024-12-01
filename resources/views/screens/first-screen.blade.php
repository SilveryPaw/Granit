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
            data-src-desk="/video/first-bg-desk.mp4"
        >
            <source/>
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
    <img class="{{ $blockName }}__background" src="/imgs/first-screen/back.png"/>
</div>