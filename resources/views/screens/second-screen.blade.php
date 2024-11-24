@php
    $blockName = 'b-second-screen';
@endphp

<div class="{{ $blockName }}">
    <div class="{{ $blockName }}__text-container">
        <h2 class="{{ $blockName }}__title c-font-overpass">
            <span>{{ $title[0] }}</span>
            @if(count($title) > 1)
                <span>{{ $title[1] }}</span>
            @endif
        </h2>
        <div class="{{ $blockName }}__values-container">
            @foreach($values as $item)
                <div class="{{ $blockName }}__value-container">
                    <span class="{{ $blockName }}__value c-font-motorblock">
                        {!! $item['value'] !!}
                    </span>
                    <span
                        class="{{ $blockName }}__description c-font-overpass"
                    >
                        {!! $item['description'] !!}
                    </span>
                </div>
            @endforeach
        </div>
    </div>
    <div
        class="{{ $blockName }}__background"
        style="--bg-mobile:url({{ $bg['mobile'] }});--bg-desk:url({{ $bg['desk'] }})"
    ></div>
</div>