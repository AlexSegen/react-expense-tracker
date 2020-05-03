export const formatNumber = val => {
    if (!val) { return 0; }
    
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);
}