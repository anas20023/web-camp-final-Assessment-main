var dep_prev = 0,
  wd_prev = 0,
  dip,
  wd,
  curr_b = 1340;

function GetValue() {
  dip = document.getElementById("d_add").value;
}

function Click_Dip() {
  if (dip > 0) {
    dep_prev += parseInt(dip);
    curr_b += parseInt(dip);
    document.getElementById("pre_dip").innerHTML = dep_prev;
    document.getElementById("cur_b").innerHTML = curr_b;
    document.getElementById("d_add").value="";
  } else {
    alert("Amount Must Be Positive!");
  }
}

function GetValue_W() {
  wd = document.getElementById("wd_add").value;
}

function Click_Wth() {
  if (wd > 0) {
    if (wd <= curr_b) {
      wd_prev += parseInt(wd);
      curr_b -= parseInt(wd);
      document.getElementById("pre_wd").innerHTML = wd_prev;
      document.getElementById("cur_b").innerHTML = curr_b;
      document.getElementById("wd_add").value="";
    }
    else
    {
      alert("Insufficient Balance!");
    }
  } else {
    alert("Amount Must Be Positive!");
  }
}
