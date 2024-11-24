@php
    $blockName = 'b-third-screen';
@endphp

<div class="{{ $blockName }}">
    <div class="{{ $blockName }}__text-container">
        @for($i = 0; $i < 4; $i++)
            <div class="{{ $blockName }}__text c-font-overpass">
                @foreach($text as $word)
                    <span>{!! $word !!}</span>
                @endforeach
            </div>
        @endfor
        <div class="{{ $blockName }}__text actual c-font-overpass">
            @foreach($text as $word)
                <span>{!! $word !!}</span>
            @endforeach
        </div>
    </div>
    <picture class="{{ $blockName }}__background c-background">
        <source srcset="{{ $bg['mobile'] }}" media="(max-width:767px)"/>
        <img src="{{ $bg['desk'] }}"/>
    </picture>
</div>