@php
    $blockName = 'b-fourth-screen';
@endphp

<div class="{{ $blockName }} c-container-content">
    <div class="{{ $blockName }}__text-container">
        <div class="{{ $blockName }}__title c-font-overpass">
            {!! $title !!}
        </div>
        <div class="{{ $blockName }}__text c-font-overpass">
            {!! $text !!}
        </div>
    </div>
    <div class="{{ $blockName }}__background">
        <picture class="{{ $blockName }}__part top">
            <source srcset="{{ $bg['mobile']['top'] }}" media="(max-width:768px)">
            <img src="{{ $bg['mobile']['top'] }}" loading="lazy"/>
        </picture>
        <picture class="{{ $blockName }}__part bottom">
            <source srcset="{{ $bg['mobile']['bottom'] }}" media="(max-width:768px)">
            <img src="{{ $bg['mobile']['bottom'] }}" loading="lazy"/>
        </picture>
        <img class="{{ $blockName }}__bg-desk" src="{{ $bg['desk'] }}" loading="lazy"/>
    </div>
</div>