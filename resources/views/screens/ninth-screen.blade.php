@php
    $blockName = 'b-ninth-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__title c-font-overpass">
        {!! $title !!}
    </div>
    <img class="{{ $blockName }}__image" src="{{ $img }}" loading="lazy"/>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}" loading="lazy"/>
    </picture>
</div>