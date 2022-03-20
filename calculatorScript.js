calc_array = new Array();
var calcul=0;
var pas_ch=0;
function getId(id)
{
    return document.getElementById(id);
}
function calc(id,n)
{
    if(n=='ce')
    {
        init(id);
    }
    else if(n=='=')
    {
        if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
        {
        eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
        calc_array[id][0] = '=';
        getId(id+'_result').value=calcul;
        calc_array[id][2]=calcul;
        calc_array[id][3]=0;
        }
    }
    else if(n=='+-')
    {
        getId(id+'_result').value=getId(id+'_result').value*(-1);
        if(calc_array[id][0]=='=')
        {
                calc_array[id][2] = getId(id+'_result').value;
                calc_array[id][3] = 0;
        }
        else
        {
                calc_array[id][3] = getId(id+'_result').value;
        }
        pas_ch = 1;
    }
    else if(n=='nbs') {
    if(getId(id+'_result').value<10 && getId(id+'_result').value>-10) {
        getId(id+'_result').value=0;
    }
    else {
        getId(id+'_result').value=getId(id+'_result').value.slice(0,getId(id+'_result').value.length-1);
    }
    if(calc_array[id][0]=='=') {
        calc_array[id][2] = getId(id+'_result').value;
        calc_array[id][3] = 0;
    }
    else {
        calc_array[id][3] = getId(id+'_result').value;
    }
    }
    else {
        if(calc_array[id][0]!='=' && calc_array[id][1]!=1) {
            eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
            getId(id+'_result').value=calcul;
            calc_array[id][2]=calcul;
            calc_array[id][3]=0;
        }
        calc_array[id][0] = n;
    }
    if(pas_ch==0) {
            calc_array[id][1] = 1;
    }
    else {
            pas_ch=0;
    }
    document.getElementById(id+'_result').focus();
    return true;
}
function add(id,n)
{
    if(calc_array[id][1]==1) {
        getId(id+'_result').value=n;
    }
    else {
        getId(id+'_result').value+=n;
    }
    if(calc_array[id][0]=='=') {
        calc_array[id][2] = getId(id+'_result').value;
        calc_array[id][3] = 0;
    }
    else {
        calc_array[id][3] = getId(id+'_result').value;
    }
    calc_array[id][1] = 0;
    document.getElementById(id+'_result').focus();
    return true;
}
function init(id) {
    getId(id+'_result').value=0;
    calc_array[id] = new Array('=',1,'0','0',0);
    document.getElementById(id+'_result').focus();
    return true;
}
function keyDown(id,evt)
{
    if((evt.keyCode>95) && (evt.keyCode<106))
    {
        var nbr = evt.keyCode-96;
        add(id,nbr);
    }
    else if((evt.keyCode>47) && (evt.keyCode<58))
    {
        var nbr = evt.keyCode-48;
        add(id,nbr);
    }
    else if(evt.keyCode==107)
    {
        calc(id,'+');
    }
    else if(evt.keyCode==109)
    {
        calc(id,'-');
    }
    else if(evt.keyCode==106)
    {
        calc(id,'*');
    }
    else if(evt.keyCode==111)
    {
        calc(id,'');
    }
    else if(evt.keyCode==110)
    {
        add(id,'.');
    }
    else if(evt.keyCode==190)
    {
        add(id,'.');
    }
    else if(evt.keyCode==188)
    {
        add(id,'.');
    }
    else if(evt.keyCode==13)
    {
        calc(id,'=');
    }
    else if(evt.keyCode==46)
    {
        calc(id,'ce');
    }
    else if(evt.keyCode==8)
    {
        calc(id,'nbs');
    }
    else if(evt.keyCode==27)
    {
        calc(id,'ce');
    }
    return true;
}