<template>
    <section class="login">
        <img class="login-img" src="@/assets/image/login.png" />
        <van-form @submit="onSubmit">
            <van-field
                v-model="form.username"
                name="username"
                label="用户姓名"
                placeholder="请填写用户名"
                :rules="[{ required: true }]"
            />

            <van-field
                v-model="form.password"
                name="password"
                label="绑定账户"
                readonly
                placeholder="请填写密码"
                @click="show = true"
            />
            <van-popup
                class="go-popup"
                position="bottom"
                safe-area-inset-bottom
                closeable
                :style="{ height: '50%' }"
                round
                v-model="show"
            >
                <div class="go-popup-title">请选择地址</div>
                <van-tabs
                    class="go-tabs"
                    v-model="tabsIndex"
                    ref="tabs"
                    :border="true"
                    :title-active-color="`#6887FA`"
                    :color="`#6887FA`"
                >
                    <div class="go-list-wrap" @scroll="onScroll">
                        <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab" animated :disabled="!tab">
                            <ul class="go-popup-list">
                                <li
                                    v-for="(item, index) in tabsData[key]"
                                    :key="index"
                                    :class="['go-list-item', index === itemActive[key] ? 'active-color' : '']"
                                    @click="onTabClick(key, index)"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </van-tab>
                    </div>
                </van-tabs>
            </van-popup>

            <div class="login-button">
                <van-button round block type="primary" :disabled="disabled" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </section>
</template>

<script lang="ts">
import { Tabs } from 'vant';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    show = false;

    form = {
        username: '',
        password: '',
    };

    offsetTop = 100;

    tabs = ['请选择'];
    tabsIndex = 0;
    tabsData = [[0, 0, 0, 0, 0, 0]];
    itemActive = [-1];

    get disabled() {
        return !this.form.username || !this.form.password;
    }

    onSubmit(values: object) {
        console.log(values);
    }

    onTabClick(key: number, index: number) {
        const nextIndex = key + 1;

        console.log(nextIndex, key >= 3);

        this.itemActive.splice(key, 1, index);

        if (nextIndex >= 4) {
            this.tabs.splice(key, 1, `${this.tabsData[key][index]}`);

            this.show = false;
            this.form.password = this.tabs.join('');

            return false;
        }

        this.tabs.splice(key, 2, `${this.tabsData[key][index]}`, '请选择');

        this.tabsData.splice(nextIndex, 0, [...Array(20).keys()]);

        if (this.tabsData[nextIndex + 1]) {
            const startIndex = nextIndex + 1;

            this.tabs.splice(startIndex, this.tabs.length - startIndex);

            this.tabsData.splice(startIndex, this.tabsData.length - startIndex);

            this.itemActive.splice(nextIndex, this.itemActive.length - nextIndex);

            console.log(this.itemActive, this.tabsData);
        }

        this.$nextTick(() => {
            this.tabsIndex = nextIndex;
        });
    }

    onScroll() {
        console.log('dddsdsd', this.tabsIndex);
    }
}
</script>

<style lang="less" scoped>
.login {
    flex: 1;
    .van-form {
        padding: 40px 28px;
        .van-field {
            display: block;
            font-size: 32px;
        }

        /deep/.van-field__label {
            display: block;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2a2a2a;
            line-height: 32px;
            padding-bottom: 28px;
        }

        .login-button {
            font-size: 32px;
            margin: 84px 32px 0;
        }
    }
    .go-popup {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .go-popup-title {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2a2a2a;
        padding: 28px 0;
        text-align: center;
    }
    /deep/ .van-hairline--top-bottom::after {
        border-width: 0 0 1px 0;
    }
    .go-tabs {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        /deep/ .van-tabs__wrap {
            height: 68px;
        }
        /deep/ .van-tabs__nav {
            display: block;
            .van-tab {
                display: inline-block;
                padding: 0 28px;
                margin-right: 20px;
            }
        }
        .go-list-wrap {
            height: 100%;
            overflow-y: auto;
        }
        /deep/ .van-tabs__content {
            flex: 1;
            overflow: hidden;
        }
    }
    .go-popup-list {
        padding: 10px 28px 0;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2a2a2a;
        line-height: 40px;
        .go-list-item {
            padding: 16px 0;
        }
    }
}
</style>
