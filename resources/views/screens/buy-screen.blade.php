@php
    $blockName = 'b-buy-screen';
@endphp
<div class="{{ $blockName }} c-container-content c-screen">
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
            <button class="{{ $blockName }}__buy">
                купить билет
            </button>
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
            <button class="{{ $blockName }}__buy">
                купить билет
            </button>
        </div>
    </div>
</div>