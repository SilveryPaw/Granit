@php
    $blockName = 'b-tenth-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__title c-font-overpass">
        @foreach($title as $part)
            <span>{!! $part !!}</span>
        @endforeach
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}" loading="lazy"/>
    </picture>
</div>