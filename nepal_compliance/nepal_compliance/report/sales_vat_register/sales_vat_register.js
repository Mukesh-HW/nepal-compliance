// Copyright (c) 2024, njsubedi, Mukesh and contributors
// For license information, please see license.txt

frappe.query_reports["Sales Vat Register"] = {
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
			fieldtype: 'Data',
		},
		{
			fieldname: 'from_date',
			label: __('From Date'),
			fieldtype: 'Date',
			default: frappe.datetime.add_months(frappe.datetime.get_today(), -1),
		},
		{
			fieldname: 'to_date',
			label: __('To Date'),
			fieldtype: 'Date',
			default: frappe.datetime.get_today(),
		},
		{
			fieldname: 'customer',
			label: __('Customer'),
			fieldtype: 'Link',
			options: 'Customer'
		},
		{
			fieldname: 'customer_group',
			label: __('Customer Group'),
			fieldtype: 'Link',
			options: 'Customer Group'
		},
		{
			fieldname: 'owner',
			label: __('Owner'),
			fieldtype: 'Link',
			options: 'User'
		},
		{
			fieldname: 'cost_center',
			label: __('Cost Center'),
			fieldtype: 'Link',
			options: 'Cost Center'
		},
		{
			fieldname: 'project',
			label: __('Project'),
			fieldtype: 'Link',
			options: 'Project'
		},
		{
			fieldname: 'name',
			label: __('Invoice Number'),
			fieldtype: 'Link',
			options: 'Sales Invoice',
			get_query: function() {
				return {
					filters: {
						'status': ["Not In", ['Return','Credit Note Issued']],
						'is_return': 0
					}
				}
			}
		}
	]
};