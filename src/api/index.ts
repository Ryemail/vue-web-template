import http from '@/utils/http';
import * as t from '@/types';

// 获取用户信息
export const getUserInfo = (params: t.Home.User) => http.get('/api/getUserInfo', { params });
