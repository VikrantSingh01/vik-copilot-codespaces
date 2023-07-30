function skillmember() {
    var member = document.getElementById("member");
    var member = member.value;
    var member = parseInt(member);
    var member = member + 1;
    var member = member.toString();
    var member = member + "人";
    var member = document.getElementById("member").innerHTML = member;
}