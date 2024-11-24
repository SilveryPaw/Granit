@php
    $blockName = 'b-header';
@endphp

<div class="{{ $blockName }} c-container-content">
    <div class="{{ $blockName }}__logo">
        {!! $logo !!}
    </div>
    <div class="{{ $blockName }}__burger-button">
    </div>
    @isset($menu)
        <div class="{{ $blockName }}__burger-menu">
            @foreach($menu as $key => $item)
                <button
                    class="{{ $blockName }}__burger-item"
                    data-index="{{ $key }}"
                >
                    {!! $item !!}
                </button>
            @endforeach
        </div>
    @endisset
</div>