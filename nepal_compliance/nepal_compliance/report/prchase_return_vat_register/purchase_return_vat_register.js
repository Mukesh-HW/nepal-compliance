// Copyright (c) 2024, njsubedi, Mukesh and contributors
// For license information, please see license.txt

frappe.query_reports["Purchase Return Vat Register"] = {
    "filters": [
        {
            fieldname: 'company',
            label: __('Company'),
            fieldtype: 'Link',
            options: 'Company',
            default: frappe.defaults.get_user_default('company')
        },
        {
            fieldname: 'nepali_date',
            label: __('Nepali Date'),
            fieldtype: 'Data'
        },
        {
            fieldname: 'supplier',
            label: __('Supplier'),
            fieldtype: 'Link',
            options: 'Supplier'
        },
        {
            fieldname: 'bill',
            label: __('Supplier Invoice No'),
            fieldtype: 'Data',
            reqd: 0
        },
        {
            fieldname: 'bill_date',
            label: __('Supplier Invoice Date'),
            fieldtype: 'Date',
        },
        {
            fieldname: 'due_date',
            label: __('Invoice Due Date'),
            fieldtype: 'Data'
        },
        {
            fieldname: 'item_name',
            label: __('Item Name'),
            fieldtype: 'Link',
            options: 'Item'
        }
        {
            fieldname: 'expesne_account',
            label: __('Expesne Account'),
            fieldtype: 'Link',
            options: 'Account'
        },
        {
            fieldname: 'warehouse',
            label: __('Warehouse'),
            fieldtype: 'Link',
            options: 'Warehouse'
        },
        {
            fieldname: 'return_invoice',
            label: __('Returned Invoice'),
            fieldtype: 'Link',
            options: 'Purchase Invoice',
            get_query: function() {
                return {
                    filters: {
                        'status': 'Return',
                        // 'return_against': ['is', 'set']
                        'is_return': 1
                    }
                };
            }
        }        
    ]
};

