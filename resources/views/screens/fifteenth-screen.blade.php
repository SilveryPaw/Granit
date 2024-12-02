@php
    $blockName = 'b-fifteenth-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__title">
        <span class="{{ $blockName }}__part first c-font-overpass">
            {!! $text['first'] !!}
        </span>
        <span class="{{ $blockName }}__part second c-font-motorblock">
            {!! $text['second'] !!}
        </span>
        <span class="{{ $blockName }}__part third c-font-overpass">
            {!! $text['third'] !!}
        </span>
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}"/>
    </picture>
</div>