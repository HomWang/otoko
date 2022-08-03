import transformerDirective from '@unocss/transformer-directives'

export default {
    // configDeps: [
    //     './unocss.ts'
    // ],
    transformers: [
        transformerDirective({
            // 为了与 vanilla CSS 兼容
            varStyle: '--w-at-',
        }),
    ],
    theme: {
        // // 初始化默认主题
        // darkSelector: ".dark-mode",
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }


            // '2xl': {'max': '1535px'},
            // // => @media (max-width: 1535px) { ... }

            // 'xl': {'max': '1279px'},
            // // => @media (max-width: 1279px) { ... }

            // 'lg': {'max': '1023px'},
            // // => @media (max-width: 1023px) { ... }

            // 'md': {'max': '767px'},
            // // => @media (max-width: 767px) { ... }

            // 'sm': {'max': '639px'},
            // // => @media (max-width: 639px) { ... }
        },
        colors: {
            BgPopup: 'var(--color-BgPopup)'
            //         white: 'var(--color-white)',
            //         black: 'var(--color-black)',
            //         'black-07': 'var(--color-black-07)',
            //         // 主色/下跌色/已完成
            //         primary: 'var(--color-primary-1)',
            //         'primary-005': 'var(--color-primary-005)',
            //         'primary-02': 'var(--color-primary-02)',
            //         // 警告提示/处理中
            //         warning: 'var(--color-warning)',
            //         // 失败/上涨
            //         error: 'var(--color-error)',
            //         // 下跌/成功/已认证
            //         success: 'var(--color-success)',
            //         default: 'var(--color-default)',
            //         defaultActive: 'var(--color-defaultActive)',
            //         // 按钮移动上去
            //         HoverButtonBG: '#3379EE',
            //         T1: 'var(--color-T1)',
            //         T2: 'var(--color-T2)',
            //         'T2-03': 'var(--color-T2-03)',
            //         'T2-06': 'var(--color-T2-06)',
            //         T3: 'var(--color-T3)',
            //         T4: 'var(--color-T4)',
            //         T5: 'var(--color-T5)',
            //         T6: 'var(--color-T6)',
            //         T7: 'var(--color-T7)',
            //         T8: 'var(--color-T8)',
            //         T9: 'var(--color-T9)',
            //         T10: 'var(--color-T10)',
            //         T11: 'var(--color-T11)',
            //         T12: 'var(--color-T12)',
            //         menu:'var(--color-menu)',
            //         menuActive:'var(--color-menu-active)'
        },
        //     textColor: {
        //         white: 'var(--color-white)',
        //         black: 'var(--color-black)',
        //         // 主色/下跌色/已完成
        //         primary: 'var(--color-primary-1)',
        //         // 警告提示/处理中
        //         warning: 'var(--color-warning)',
        //         // 失败/上涨
        //         error: 'var(--color-error)',
        //         // 下跌/成功/已认证
        //         success: 'var(--color-success)',
        //         default: 'var(--color-default)',
        //         defaultActive: 'var(--color-defaultActive)',
        //         // 按钮上字体浮过
        //         HoverButton: '#649DFF',
        //         arrow: "#7D8695",
        //         T1: 'var(--color-T1)',
        //         T2: 'var(--color-T2)',
        //         T3: 'var(--color-T3)',
        //         T4: 'var(--color-T4)',
        //         T5: 'var(--color-T5)',
        //         T6: 'var(--color-T6)',
        //         T7: 'var(--color-T7)',
        //         T8: 'var(--color-T8)',
        //         T9: 'var(--color-T9)',
        //         T10: 'var(--color-T10)',
        //     },
        //     borderColor: {
        //         white: 'var(--color-white)',
        //         black: 'var(--color-black)',
        //         // 主色/下跌色/已完成
        //         primary: 'var(--color-primary-1)',
        //         // 失败/上涨
        //         error: 'var(--color-error)',
        //         // 下跌/成功/已认证
        //         success: 'var(--color-success)',
        //         T1: 'var(--color-T1)',
        //         T2: 'var(--color-T2)',
        //         T3: 'var(--color-T3)',
        //         T4: 'var(--color-T4)',
        //         T5: 'var(--color-T5)',
        //         T6: 'var(--color-T6)',
        //         T7: 'var(--color-T7)',
        //         T8: 'var(--color-T8)',
        //         T9: 'var(--color-T9)',
        //         T10: 'var(--color-T10)',
        //     },
        //     divideColor: {
        //         white: 'var(--color-white)',
        //         black: 'var(--color-black)',
        //         T6: 'var(--color-T6)',
        //         T7: 'var(--color-T7)',
        //     },
        //     screens: {
        //         'sm': '640px',//	@media (min-width: 640px) { ... }
        //         'md': '768px',//	@media (min-width: 768px) { ... }
        //         'lg': '1024px',//	@media (min-width: 1024px) { ... }
        //         'xl': '1280px',//	@media (min-width: 1280px) { ... }
        //         '2xl': '1450px',//	@media (min-width: 1536px) { ... }
        //     },
        fontSize: {
            'fs12': '0.75rem',
            'fs14': '0.875rem',
            'fs16': '1rem',
            'fs18': '1.125rem',
            'fs20': '1.25rem',
            'fs22': '1.375rem',
            'fs24': '1.5rem',
            'fs26': '1.625rem',
            'fs28': '1.75rem',
            'fs30': '1.875rem',
            'fs32': '2rem',
            'fs34': '2.125rem',
            'fs36': '2.25rem',
            'fs38': '2.375rem',
            'fs40': '2.5rem',
            'fs42': '2.625rem',
            'fs44': '2.75rem',
            'fs46': '2.875rem',
            'fs48': '3rem',
            'fs50': '3.125rem',
            'fs52': '3.25rem',
            'fs54': '3.375rem',
            'fs56': '3.5rem',
            'fs58': '3.625rem',
            'fs60': '3.75rem',
            'fs62': '3.875rem',
            'fs64': '4rem',
            'fs66': '4.125rem',
        },
    }
}