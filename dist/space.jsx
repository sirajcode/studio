import { css } from 'styled-components';

export const space = css`
   margin:${p=>p.m};
   margin-top:${p=>p.mt};
   margin-bottom:${p=>p.mb};
   margin-left:${p=>p.ml};
   margin-right:${p=>p.mr};
   margin-left:${p=> p.mx};
   margin-right:${p => p.mx};
   margin-top:${p=>p.my};
   margin-bottom:${p => p.my};

   padding:${p=>p.p};
   padding-top:${p=>p.pt};
   padding-bottom:${p=>p.pb};
   padding-left:${p=>p.pl};
   padding-right:${p=>p.pr};
   padding-left:${p=> p.px};
   padding-right:${p => p.px};
   padding-top:${p=>p.py};
   padding-bottom:${p => p.py};

`