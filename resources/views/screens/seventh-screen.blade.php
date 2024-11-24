@php
    $blockName = 'b-seventh-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__content-container">
        <div class="{{ $blockName }}__wrapper">
            @foreach($imgs as $img)
                <img class="{{ $blockName }}__img" src="{{ $img }}"/>
            @endforeach
        </div>
        <div class="{{ $blockName }}__title c-font-overpass">
            {!! $title !!}
        </div>
    </div>
    <div class="{{ $blockName }}__text c-font-overpass">
        {!! $text !!}
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}"/>
    </picture>
</div>