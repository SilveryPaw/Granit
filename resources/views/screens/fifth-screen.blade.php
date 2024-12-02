@php
    $blockName = 'b-fifth-screen';
@endphp

<div class="{{ $blockName }} c-container-content c-screen">
    <div class="{{ $blockName }}__text-container">
        @foreach($text as $text)
            <div class="{{ $blockName }}__text c-font-overpass">
                {!! $text !!}
            </div>
        @endforeach
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}"/>
    </picture>
</div>