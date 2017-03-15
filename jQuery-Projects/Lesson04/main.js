/**
 * Created by P03-M01 on 15/03/2017.
 */

$(document).ready(function () {

    /** TODO:
     * - khi click nut .hidden
     * - thi the <p> se bi an di
     * - khi click nut .show
     * - thi the <p> se hien ra
     * - khi click vao nut .toggle
     * - thi the <p> se an / hien tuy dieu kien hien tai
     **/

    $('button.an').click(function() {
       $('p').hide(1000);
    });
    $('button.hien').click(function() {
        $('p').show(1000);
    });
    $('button.anhien').click(function() {
        $('p').toggle(1000);
    });

});