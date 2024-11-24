@php
    $blockName = 'b-buy-button';
@endphp

<a
    class="{{ $blockName }}"
    href="{{ $link }}"
    target="_blank"
>
    {!! $text !!}
</a>