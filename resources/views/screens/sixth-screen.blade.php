@php
    $blockName = 'b-sixth-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__text-container c-font-overpass">
        {!! $text !!}
    </div>
    @isset($bg)
        <picture class="{{ $blockName }}__background c-background">
            <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
            <img src="{{ $bg['desk'] }}" loading="lazy"/>
        </picture>
    @endisset
</div>