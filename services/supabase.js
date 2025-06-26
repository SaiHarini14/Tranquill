import {createClient} from '@supabase/supabase-js';

const SUPA_URL = '';
const SUPA_ANONKEY ='';

export const supabase = createClient(SUPA_URL,SUPA_ANONKEY);
