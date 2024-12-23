@php
    $blockName = 'b-eleventh-screen';
@endphp

<div class="{{ $blockName }} c-screen" data-index="{{ $index }}">
    <div class="{{ $blockName }}__title c-font-motorblock">
        {!! $title !!}
    </div>
    <div class="{{ $blockName }}__music-slider">
        <div class="{{ $blockName }}__music-wrapper">
            @foreach($musics as $music)
                <div class="{{ $blockName }}__music-slide">
                    <img
                        class="{{ $blockName }}__music-img"
                        src="{{ $music['img'] }}"
                    />
                    <div class="{{ $blockName }}__author c-font-overpass">
                        {!! $music['author'] !!}
                    </div>
                    <div class="{{ $blockName }}__genre c-font-overpass">
                        Жанр: {!! $music['genre'] !!}
                    </div>
                </div>
            @endforeach
        </div>
        <div class="{{ $blockName }}__controls-container">
            <div class="{{ $blockName }}__controls" data-index="{{ $index }}">
                <button class="{{ $blockName }}__nav-elem prev">{!! $nav['next'] !!}</button>
                <button class="{{ $blockName }}__nav-elem next">{!! $nav['next'] !!}</button>
            </div>
        </div>
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}"/>
    </picture>
</div>