<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{!! $seo['title'] !!}</title>
    @isset($seo['description'])
        <meta name="description" content="{{ $seo['description'] }}">
    @endisset
    @isset($seo['keywords'])
        <meta name="keywords" content="{{ $seo['keywords'] }}">
    @endisset
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite([
            'resources/css/app.css',
            'resources/js/app.js',
            'resources/scss/app.scss',
        ])
    @endif
</head>
<body>
    <main>
        <div class="content">
            @yield('content')
        </div>
    </main>
</body>
</html>