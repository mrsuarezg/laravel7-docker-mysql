<template>
    <div>
        <h1>Post Lists</h1>
        <v-app>
            <v-btn color="primary" small>Click Me</v-btn>
            <v-icon large>mdi-home</v-icon>
        </v-app>
        <table class="table table-hover">
            <thead>
                <th>Title</th>
                <th>Description</th>
                <th>Viewers</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in postingList" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.views }}</td>
                    <td>
                        <button class="btn btn-secondary btn-sm" @click="edit(item)"><i class="fa fa-edit"></i></button>
                        <button class="btn btn-danger btn-sm" @click="remove(item, index)"><i
                                class="fa fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Input Title" v-model="form.title">
                        </div>
                    </td>
                    <td>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Input Description"
                                v-model="form.description">
                        </div>
                    </td>
                    <td>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Input Viewers" v-model="form.views">
                        </div>
                    </td>
                    <td>
                        <div class="form-group">
                            <button class="btn btn-primary btn-sm" @click="submit"><i class="fa fa-plus"></i></button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">Title</label>
                            <input type="text" class="form-control" placeholder="Input Title" v-model="formEdit.title">
                        </div>
                        <div class="form-group">
                            <label for="">Description</label>
                            <input type="text" class="form-control" placeholder="Input Description"
                                v-model="formEdit.description">
                        </div>
                        <div class="form-group">
                            <label for="">Viewers</label>
                            <input type="number" class="form-control" placeholder="Input Viewers"
                                v-model="formEdit.views">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="save()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data() {
        return {
            postingList: this.post,
            form: {
                title: null,
                description: null,
                views: 0
            },
            formEdit: {
                title: null,
                description: null,
                views: 0
            },
            selectedId: null
        }
    },
    methods: {
        submit() {
            const vm = this;
            axios.post('/posts', this.form)
                .then(function (response) {
                    vm.postingList.push(response.data.data);
                    vm.form.title = null
                    vm.form.description = null
                    vm.form.views = 0
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        remove(item, index) {
            const vm = this;
            axios.delete(`/posts/${item.id}`)
                .then(function (response) {
                    vm.postingList.splice(index, 1)
                })
                .catch(function (error) {
                    console.log(error)
                });
        },
        edit(item) {
            console.log(item)
            this.formEdit.title = item.title;
            this.formEdit.description = item.description;
            this.formEdit.views = item.views;
            this.selectedId = item.id
            $('#editModal').modal('show');

        },
        save() {
            const vm = this;
            axios.put(`/posts/${vm.selectedId}`, this.formEdit)
                .then(function (response) {
                    alert('Posts has been sucessfully saved')
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    }
}
</script>