@php
    $blockName = 'b-final-screen';
@endphp

<div class="{{ $blockName }} c-screen c-container-content">
    <div class="{{ $blockName }}__title c-font-overpass">
        {!! $title !!}
    </div>
    <div class="{{ $blockName }}__socials-container">
        @foreach($socials as $social)
            <a
                class="{{ $blockName }}__social"
                href="{{ $social['link'] }}"
                title="{{ $social['title'] }}"
                target="_blank"
            >
                {!! $social['icon'] !!}
            </a>
        @endforeach
    </div>
    <div class="{{ $blockName }}__contacts-container">
        @foreach($contacts as $contact)
            <div class="{{ $blockName }}__contact">
                <div class="{{ $blockName }}__contact-title">
                    {!! $contact['title'] !!}
                </div>
                <a
                    class="{{ $blockName }}__contact-link"
                    href="{{ $contact['href'] }}"
                >
                    {!! $contact['linkText'] !!}
                </a>
            </div>
        @endforeach
    </div>
    <div class="{{ $blockName }}__copyright">
        {!! $copyright !!}
    </div>
</div>