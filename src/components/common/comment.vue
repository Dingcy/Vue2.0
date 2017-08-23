<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span>
                            <a>返回</a>
                        </span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea v-model="content"></textarea>
                </li>
                <li>
                    <mt-button @click="submitCommen" type="primary" size="large">提交评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="commen in commentList">
                    {{commen.user_name}}：{{commen.content}} {{commen.add_time|DateFilter}}
                </li>
            </ul>
            <mt-button @click="getMore" type="danger" plain size="large">加载更多</mt-button>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            commentList: [],
            content: '',
            currentPage: 1
        }
    },
    created() {
        this.getcommeData()
    },
    methods: {
        submitCommen() {
            this.$ajax.post('postcomment/' + this.$route.query.id,
                'content=' + this.content)
                .then(
                res => {
                    if (res.data.status == 0) {
                        this.content = '';
                        this.currentPage = 1;
                        console.log(this.currentPage);
                        this.commentList = [];
                        this.getcommeData();
                    }
                }
                )
        },
        getcommeData() {
            this.$ajax.get('getcomments/' + this.$route.query.id + '?pageindex=' + this.currentPage).then(
                res => {
                    this.commentList = this.commentList.concat(res.data.message);
                }
            )
        },
        getMore(){
            this.currentPage++;
            this.getcommeData();
        }
    }
}
</script>
<style scoped>
.photo-comment>div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment>div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 5px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>
