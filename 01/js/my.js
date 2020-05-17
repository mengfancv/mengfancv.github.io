$(document).ready(function () {
        $("#btn").on("click", async function() {
                 let val = $("#in").val();
                let content = await eel.py_hello(val)();
                $("#out").text(content);
                console.log(content);
        });

        $("#file").change(function () {

                    var url = null;
                    var fileObj = document.getElementById("file").files[0];
                    if (window.createObjcectURL != undefined) {
                        url = window.createOjcectURL(fileObj);
                    } else if (window.URL != undefined) {
                        url = window.URL.createObjectURL(fileObj);
                    } else if (window.webkitURL != undefined) {
                        url = window.webkitURL.createObjectURL(fileObj);
                    }
                    console.log(url);
        });


        // $("#file").change(function () {
        //         // console.log($(this).val());
        //         // console.log(ii($("#file")));
        //
        //         console.log($('#file')[0].files[0]).name);
        //         // document.getElementById("file-id").files[0].name;
        // });

});
function getUrlRelativePath() {
                var url = document.location.toString();  //获取当前文件的绝对路径
                return url;
                }