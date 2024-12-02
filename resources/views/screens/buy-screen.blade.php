@php
    $blockName = 'b-buy-screen';
@endphp
<div class="{{ $blockName }} c-screen">
    <div class="{{ $blockName }}__title c-font-overpass">
        Успей купить билет
    </div>
    <div class="{{ $blockName}}__container">
        <div class="{{ $blockName }}__ticket-container">
            <p class="{{ $blockName }}__label">
                Early Birds
            </p>
            <p class="{{ $blockName }}__cost">
                <span class="{{ $blockName }}__value">3000</span>
                <span class="{{ $blockName }}__currency">₽</span>
            </p>
            <p class="{{ $blockName }}__sub">
                Осталось 183 билета
            </p>
            <p class="{{ $blockName }}__descr">
                Ваш билет на GRANI по спец.цене на старте продаж. Цена может измениться уже завтра.
            </p>
            <a
                class="{{ $blockName }}__buy"
                data-tc-token="eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjcxYjdlODVjNGI4YWRiMWZjYjc1MTliIn0.O1jLtwQsqu752kyMqo5gsC9r8gu8FXiSqXbL3mmaH9E"
                data-tc-event="671b858e2b2cf13e2b5a4ff8"
                data-buttonfieldset="button"
            >
                купить билет
            </a>
        </div>
        <div class="{{ $blockName }}__ticket-container golden">
            <p class="{{ $blockName }}__label">
                Fast track
            </p>
            <p class="{{ $blockName }}__cost">
                <span class="{{ $blockName }}__value">7000</span>
                <span class="{{ $blockName }}__currency">₽</span>
            </p>
            <p class="{{ $blockName }}__sub">
                ПРЕМИУМ
            </p>
            <p class="{{ $blockName }}__descr">
                Отдельный вход без очередей максимальное погружение в GRANI
            </p>
            <a
                class="{{ $blockName }}__buy"
                data-tc-token="eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjcxYjdlODVjNGI4YWRiMWZjYjc1MTliIn0.O1jLtwQsqu752kyMqo5gsC9r8gu8FXiSqXbL3mmaH9E"
                data-tc-event="671b858e2b2cf13e2b5a4ff8"
                data-buttonfieldset="button"
            >
                купить билет
            </a>
        </div>
    </div>
</div>