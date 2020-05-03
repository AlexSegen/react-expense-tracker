export const formatNumber = val => {
    if (!val) { return 0; }
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);
}

export const formatDateTime = date => {
    var d = new Date(date);
    return d.toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}