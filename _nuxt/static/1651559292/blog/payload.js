__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h){return {data:[{blogdata:{contents:[{id:"xr_82y1f31",createdAt:b,updatedAt:"2022-03-10T03:40:38.341Z",publishedAt:b,revisedAt:b,title:"文字列をdiffで比較するツールを作りました",body:"\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fsk0540.github.io\u002Fnuxt-diff-test\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eページはこちら\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003Ch2 id=\"h9707d3a59a\"\u003E概要\u003C\u002Fh2\u003E\u003Cp\u003E左右に２つの文字列を入力すると比較の差分に背景を着色して表示できるツールです。\u003Cbr\u003E文章やコードの比較にお使いください。\u003C\u002Fp\u003E\u003Ch2 id=\"h293f170a56\"\u003E仕組み\u003C\u002Fh2\u003E\u003Cp\u003Egoogle-diff-match-patchの\u003Ccode\u003Ediff_main()\u003C\u002Fcode\u003E関数は２つの文字列を引数に入力すると比較結果を状態を示す数字と異なる部分ごとに分割された文字列が入った配列の配列を出力します。\u003Cbr\u003E\u003Ccode\u003E-1\u003C\u002Fcode\u003Eは左にだけ入っている文字列、\u003Cbr\u003E\u003Ccode\u003E1\u003C\u002Fcode\u003Eは右にだけ入っている文字列、\u003Cbr\u003E\u003Ccode\u003E0\u003C\u002Fcode\u003E双方に入っている文字列という形のデータなので、\u003Cbr\u003E左に\u003Ccode\u003E0\u003C\u002Fcode\u003Eと背景を着色した\u003Ccode\u003E-1\u003C\u002Fcode\u003Eを、\u003Cbr\u003E右に\u003Ccode\u003E0\u003C\u002Fcode\u003Eと背景を着色した\u003Ccode\u003E1\u003C\u002Fcode\u003Eを出力することで\u003Cbr\u003E元の文字列に差分だけ着色した結果を表示することができます。\u003C\u002Fp\u003E\u003Ch2 id=\"h6e312b3deb\"\u003E課題\u003C\u002Fh2\u003E\u003Cp\u003Eどちらかの文字列の表示に改行があっても反対の文字列には反映されないため、長文を比較すると次第に上下のずれが大きくなってしまいます。\u003Cbr\u003E特にブラウザによる自動改行を取得する方法が難しくどのように解決するか模索中です……\u003C\u002Fp\u003E"},{id:"seel636li",createdAt:c,updatedAt:d,publishedAt:c,revisedAt:d,title:"ブログを作りました",body:"\u003Cp\u003E自分がWebの技術で作る色々な作品の紹介や制作工程を発信できる場所としてブログを制作しました。\u003Cbr\u003E\u003Cbr\u003E技術面をざっくりと概説すると、\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003Eコンテンツ管理：MicroCMS\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003Eフレームワーク：Nuxt.js\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003Eホスティング：GitHub Pages\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003Eといった形をとっています。\u003Cbr\u003E（技術的な解説も今後記事にする予定です）\u003Cbr\u003E\u003Cbr\u003Eブログとしての機能はまだ未完成な状態ですが、ある程度形にはなってきたので現段階でとりあえず公開してこれから追加で機能を増やしていこうと思います。\u003C\u002Fp\u003E"},{id:"8i7zq5_kdg",createdAt:e,updatedAt:f,publishedAt:e,revisedAt:f,title:"MicroCMSで使える機能のテスト②",body:"\u003Cp\u003EMicroCMSから投稿できる様々な装飾の表示テスト。CSSのデザイン確認用。\u003C\u002Fp\u003E\u003Ch2 id=\"hb42883d47d\"\u003E大きい見出し\u003C\u002Fh2\u003E\u003Ch5 id=\"h19c05de265\"\u003E小さい見出し\u003C\u002Fh5\u003E\u003Cp\u003E\u003Cspan style=\"font-size: 2.5em\"\u003E最大文字\u003C\u002Fspan\u003E\u003Cbr\u003E\u003Cspan style=\"font-size: 0.75em\"\u003E小さい文字\u003C\u002Fspan\u003E\u003Cbr\u003E\u003Cstrong\u003E太字、\u003C\u002Fstrong\u003E\u003Cem\u003E斜体、\u003C\u002Fem\u003E\u003Cu\u003E下線、\u003C\u002Fu\u003E\u003Cs\u003E打ち消し線、\u003C\u002Fs\u003E\u003Ccode\u003Ecode\u003C\u002Fcode\u003E、\u003Cspan style=\"background-color:#dddddd\"\u003E背景、\u003C\u002Fspan\u003E\u003Cspan style=\"color:#999999\"\u003E文字、\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp style=\"text-align:right\"\u003E（右揃え）\u003C\u002Fp\u003E\u003Cblockquote\u003E引用1\u003Cbr\u003E引用2\u003C\u002Fblockquote\u003E\u003Cpre\u003E\u003Ccode\u003Ecode \nblock\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Col\u003E\u003Cli\u003E番号\u003C\u002Fli\u003E\u003Cli\u003E付き\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003Cul\u003E\u003Cli\u003Eリスト\u003Cul\u003E\u003Cli\u003Eインデント\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003E文字\u003Csub\u003E下付き\u003C\u002Fsub\u003E\u003Csup\u003E上付き\u003C\u002Fsup\u003E\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fsk0540.github.io\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eリンク\u003C\u002Fa\u003E\u003C\u002Fp\u003E"},{id:"mca99ci0ea",createdAt:g,updatedAt:h,publishedAt:g,revisedAt:h,title:"MicroCMSで使える機能のテスト①",body:"\u003Cp\u003E\u003Cimg src=\"https:\u002F\u002Fimages.microcms-assets.io\u002Fassets\u002F6b9c36dda0d4401785e415c76d5b8fd6\u002Fc6a7e92b80074cab97001f938e02503a\u002Fico211030.jpg\" alt=\"\"\u003E\u003Cbr\u003E画像のテスト。今後アイキャッチやサムネイルの画像付きで投稿できるようにしたい\u003C\u002Fp\u003E"},{id:"t_ptk2j9ys",createdAt:a,updatedAt:a,publishedAt:a,revisedAt:a,title:"最初の記事",body:"\u003Cp\u003E最初の本文\u003C\u002Fp\u003E"}],totalCount:5,offset:0,limit:10}}],fetch:{},mutations:void 0}}("2021-11-02T05:28:51.924Z","2022-03-10T02:15:22.152Z","2022-03-03T13:19:44.918Z","2022-03-03T14:13:31.320Z","2022-03-01T08:57:26.605Z","2022-03-02T12:21:32.445Z","2021-11-04T02:21:11.967Z","2021-11-04T02:22:19.203Z")));