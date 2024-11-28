@php
    $blockName = 'b-header';
@endphp

<div class="{{ $blockName }} c-container-content">
    <div class="{{ $blockName }}__logo">
        {!! $logo !!}
    </div>
    <div class="{{ $blockName }}__menu">
        @foreach($menu as $key => $item)
            <button
                class="{{ $blockName }}__menu-item c-font-overpass"
                data-index="{{ $key }}"
            >
                {!! $item !!}
            </button>
        @endforeach
    </div>
    <a class="{{ $blockName }}__tg-link" href="{{ $tgLink }}" target="_blank">
        {!! $tgIcon !!}
    </a>
    <div class="{{ $blockName }}__burger-button">
    </div>
    @isset($menu)
        <div class="{{ $blockName }}__burger-menu">
            @foreach($menu as $key => $item)
                <button
                    class="{{ $blockName }}__burger-item c-font-overpass"
                    data-index="{{ $key }}"
                >
                    {!! $item !!}
                </button>
            @endforeach
        </div>
    @endisset
</div>