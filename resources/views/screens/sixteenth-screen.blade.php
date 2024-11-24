@php
    $blockName = 'b-sixteenth-screen';
@endphp

<div class="{{ $blockName }} c-screen c-container-content">
    <div class="{{ $blockName }}__title c-font-overpass">
        {!! $title !!}
    </div>
    <div class="{{ $blockName }}__chunks-container">
        @foreach($partners as $key => $chunk)
            <div class="{{ $blockName }}__partners-chunk {{ $key }}">
                <div class="{{ $blockName }}__partners-wrapper">
                    @foreach($chunk as $partner)
                        @isset($partner['link'])
                            <a
                                class="{{ $blockName }}__partner"
                                href="{{ $partner['link'] }}"
                                target="_blank"
                            >
                                {!! $partner['icon'] !!}
                            </a>
                        @else
                            <div class="{{ $blockName }}__partner">
                                {!! $partner['icon'] !!}
                            </div>
                        @endisset
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
</div>